import { Button, Col, Form, Row } from "react-bootstrap"
import NavBarSearch from "./NavBarSearch"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchBar = (props) => {
  const [search, setSearch] = useState("")
  const [searchResults, setResults] = useState()

  const multiLink = `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=en-US&page=1`

  const searchMulti = () => {
    fetch(multiLink, props.options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          console.log(response)
          throw new Error(response.status)
        }
      })
      .then((data) => {
        const filteredResults = data.results.filter((person) => person.media_type !== "person")
        setResults(filteredResults)
      })
      .catch((err) => err)
  }

  return (
    <Form
      className="position-relative flex-grow-1"
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          e.preventDefault()
          searchMulti()
          setSearch("")
        }
      }}>
      <Row className=" align-items-center border-0 border rounded-3 order-md-0 mx-0">
        <Col xs="auto" className="px-1 d-flex w-100">
          <Form.Control
            type="text"
            placeholder="Cosa ti va di guardare?"
            value={search}
            className="mr-sm-2 border-0 rounded-start-3 rounded-end-0 flex-grow-1"
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          <Button
            className="rounded-start-0 bg-dark border-0 border-start border-2"
            onClick={(e) => {
              e.preventDefault()
              searchMulti()
              setSearch("")
            }}>
            <FontAwesomeIcon
              icon="fa-solid fa-magnifying-glass"
              style={{ color: "rgb(255, 255, 255)" }}
            />
          </Button>
        </Col>
      </Row>
      {searchResults ? (
        <Row
          onMouseLeave={() => {
            setTimeout(() => setResults(null), 1000)
          }}
          className="position-absolute bg-black p-3 justify-content-center w-100 m-0"
          xs={1}
          sm={2}
          lg={3}
          xl={4}
          xxl={6}>
          {searchResults.slice(0, 6).map((result) => {
            return (
              <NavBarSearch
                key={result.id}
                poster={result.poster_path}
                mediaType={result.media_type}
                year={
                  result.release_date || result.first_air_date
                    ? result.release_date
                      ? result.release_date.slice(0, 4)
                      : result.first_air_date.slice(0, 4)
                    : ""
                }
                titleMovie={result.title}
                titleSeries={result.name}
                id={result.id}
                setResults={setResults}
              />
            )
          })}
        </Row>
      ) : (
        <div style={{ width: "0", height: "0" }}></div>
      )}
    </Form>
  )
}
export default SearchBar
