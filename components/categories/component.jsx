import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Categories = ({ categories }) => {
  const renderCategories = categories.map(
    ({ node: { id, backgroundImage, name } }) => (
      <Link key={id} href={`/?category=${id}`}>
        <Icon>
          {backgroundImage && <img src={backgroundImage.url} />}
          <Text>{name}</Text>
        </Icon>
      </Link>
    )
  );

  return (
    <Container>
      <Icons>
        <Link href="/">
          <Icon>
            <img src="https://recipe1.ezmember.co.kr/img/mobile/cate1_01.png" />
            <Text>Todos</Text>
          </Icon>
        </Link>
        {renderCategories}
      </Icons>
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  margin-bottom: 60px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Text = styled.h5`
  font-family: Karla, sans-serif;
`;

const Icon = styled.a`
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg,
  img {
    width: 66px;
    &:hover {
      color: #f2b636;
    }
  }

  :hover,
  :focus {
    cursor: pointer;

    ${Text} {
      color: #f2b636;
      transition: all 0.2s ease;
    }
  }
`;
