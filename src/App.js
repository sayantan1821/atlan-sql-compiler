import { useState, useEffect } from "react";
import Link from "react-dom";
import "./App.css";
import { TextField, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Dropdown } from "react-bootstrap";
import { data, suggestions } from "./sqlData";
import TableGrid from "./components/TableGrid/TableGrid";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [queryText, setQueryText] = useState("");
  const [history, setHistory] = useState([]);
  const [tableData, setTableData] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const handleInputQuery = (e) => {
    setQueryText(e.target.value);
  };
  const handleSubmitQuery = () => {
    let result = data.filter((d) => d.query === queryText);
    if (result.length === 0) result = [data[2]];
    setLoading(true);
    setTimeout(() => {
      setTableData(result[0]);
      setLoading(false);
    }, 400);

    setHistory([...history, queryText]);
    setPage(0);
    setRowsPerPage(10);
  };
  const handleSuggestion = (sgstn) => {
    setQueryText(sgstn);
  };
  const handleDeleteHistory = (id) => {
    let hist = history.filter((h, idx) => idx !== id);
    setHistory(hist);
  };
  const handleReuseHistory = (q) => {
    setQueryText(q);
  };
  return (
    <div className="App">
      <div className="header_section">
        <h1>Dummy SQL Compiler</h1>
        <IconButton aria-label="GitHub" className="github_icon">
          <a
            rel="noopener noreferrer"
            href="https://github.com/sayantan1821/atlan-sql-compiler"
            target="_blank"
          >
            <GitHubIcon style={{ fontSize: "30px" }} />
          </a>
        </IconButton>
      </div>
      <div className="query_section">
        <Dropdown>
          <Dropdown.Toggle className="suggestion_button" id="dropdown-basic">
            Suggestions
          </Dropdown.Toggle>

          <Dropdown.Menu className="suggestions_menu">
            {suggestions.map((sgstn, idx) => (
              <Dropdown.Item
                className="suggestions_item"
                key={idx}
                onClick={() => handleSuggestion(sgstn)}
              >
                {sgstn}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <div className="query_field">
          <TextField
            className="query_input"
            id="outlined-basic"
            value={queryText}
            onChange={handleInputQuery}
            label="Enter Query"
            variant="outlined"
          />
          <Button
            className="query_submit"
            onClick={handleSubmitQuery}
            variant="contained"
            size="large"
            disabled={queryText === ""}
          >
            RUN
          </Button>
        </div>
        <div className="output_section">
          {!loading ? (
            <div>
              {tableData.output && (
                <TableGrid
                  headCells={tableData.headcells}
                  rows={tableData.output}
                  page_no={page}
                  rows_per_page={rowsPerPage}
                />
              )}
            </div>
          ) : (
            <p className="loading_text">Loading...</p>
          )}
        </div>
        <div className="history_section">
          <h3>History</h3>

          {history &&
            history.map((h, idx) => (
              <div className="history_row history_border" key={idx}>
                <p className="" key={idx} onClick={() => handleReuseHistory(h)}>
                  {h}
                </p>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteHistory(idx)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
