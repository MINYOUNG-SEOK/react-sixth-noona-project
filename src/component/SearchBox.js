import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [searchType, setSearchType] = useState("name");
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch({
      type: "SEARCH_CONTACT",
      payload: { searchType, searchKeyword },
    });
    setSearchKeyword("");
  };

  const handleShowAll = () => {
    dispatch({
      type: "SHOW_ALL_CONTACTS",
    });
  };

  return (
    <div className="mb-3">
      <Row>
        <Col lg={4}>
          <Form.Select onChange={(e) => setSearchType(e.target.value)}>
            <option value="name">이름</option>
            <option value="phoneNumber">전화번호</option>
          </Form.Select>
        </Col>

        <Col lg={6}>
          <Form.Control
            type="text"
            placeholder="검색어를 입력해주세요"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button onClick={handleSearch}>찾기</Button>
        </Col>
      </Row>
      <Button className="mt-3" variant="secondary" onClick={handleShowAll}>
        전체 보기
      </Button>
    </div>
  );
};

export default SearchBox;
