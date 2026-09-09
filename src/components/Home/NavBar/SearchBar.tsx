import { Button, Col, Form, Row } from "react-bootstrap"
import NavBarSearch from "./NavBarSearch"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import type { MovieTypes, TvShowTypes } from "../../../assets/types"
import { getMultiFetch } from "../../../assets/functions"

const SearchBar = () => {
  const [search, setSearch] = useState("")
  const [searchResults, setResults] = useState<(MovieTypes | TvShowTypes)[] | undefined>()

  return (
    <Form
      className="position-relative flex-grow-1"
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          e.preventDefault()
          getMultiFetch({ setResults, search })
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
              getMultiFetch({ setResults, search })
              setSearch("")
            }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "rgb(255, 255, 255)" }} />
          </Button>
        </Col>
      </Row>
      {searchResults ? (
        <Row
          onMouseLeave={() => {
            setTimeout(() => setResults(undefined), 1000)
          }}
          className="position-absolute bg-black p-3 justify-content-center w-100 m-0"
          xs={1}
          sm={2}
          lg={3}
          xl={4}
          xxl={6}>
          {searchResults &&
            searchResults.slice(0, 6).map((result) => {
              return (
                <NavBarSearch
                  key={result.id}
                  poster={result.poster_path}
                  mediaType={result.media_type}
                  year={
                    (result as MovieTypes).release_date || (result as TvShowTypes).first_air_date
                      ? (result as MovieTypes).release_date
                        ? (result as MovieTypes).release_date.slice(0, 4)
                        : (result as TvShowTypes).first_air_date.slice(0, 4)
                      : ""
                  }
                  titleMovie={(result as MovieTypes).title}
                  titleSeries={(result as TvShowTypes).name}
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
