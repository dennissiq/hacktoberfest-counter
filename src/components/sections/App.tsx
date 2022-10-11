import React from "react"
import styled from "styled-components"
import logo from "../../assets/logo-white.svg"

const Container = styled.div`
  display: flex;
  padding-top: 25px;
  justify-content: center;
`

const Title = styled.h1`
  font-weight: 900;
  color: #ffffff;
  font-size: 100px;
  text-align: center;
`

const Subtitle = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: 2px;
  text-align: center;

  a {
    text-transform: lowercase;
    color: #2f3941;
    letter-spacing: 0px;
    background-color: #fcaf17;
    border-radius: 25px;
    font-weight: bold;
    padding: 15px;
    text-decoration: none;
  }
`

const Text = styled.div`
  font-weight: 400;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 15px;
  text-align: center;
`

const UserCard = styled.div`
  display: grid;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  margin: 0 300px;
  grid-template-columns: 0.8fr 1fr 3fr;

  img {
    border-radius: 8px;
  }

  p.title {
    font-weight: bold;
  }
`

const Spacer = styled.div`
  padding-top: 50px;
`

type prCounterProps = {
  total_count: number
  items: {
    user: {
      login: string
      avatar_url: string
    }
    title: string
  }[]
}

const Index = () => {
  const [prCounter, setPrCounter] = React.useState<prCounterProps>({
    total_count: 0,
    items: [{ user: { login: "", avatar_url: "" }, title: "" }],
  })

  React.useEffect(() => {
    fetch("https://api.github.com/search/issues?q=is:pr%20label:hacktoberfest")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPrCounter(data)
      })
  }, [])

  return (
    <>
      <Container>
        <img src={logo} />
      </Container>
      <Spacer />
      <Title>{prCounter.total_count} PRs</Title>
      <Subtitle>
        utilizando a label{" "}
        <a href="https://github.com/dennissiq/hacktoberfest-counter/pulls">hacktoberfest-youse</a>
      </Subtitle>
      <Spacer />
      <Spacer />
      <Text>Últimos 30 PRs</Text>
      <Spacer />
      {prCounter.items.map((item) => (
        <>
          <UserCard>
            <img src={item.user.avatar_url} width="100px" />
            <p className="title">{item.user.login}:</p>
            <p>{item.title}</p>
          </UserCard>
          <Spacer />
        </>
      ))}
    </>
  )
}

export default Index