import React, { useState, Fragment } from "react"
import styled, { keyframes } from "styled-components"
import Card from "./card"
import Form from "./form"

const Content = () => {
  const [token, setToken] = useState("")
  const [serverData, setServerData] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`Submitting ${token}`)
    if (token !== "") {
      fetch("https://discordapp.com/api/users/@me/guilds", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bot " + token,
        },
      })
        .then(resp => resp.json())
        .then(data => setServerData(data))
        .catch(err => console.log(err))
    }
    console.log(serverData)
  }

  return (
    <ContentWrapper>
      <h1>Discord Server Checker</h1>
      <h4>Check your own, or your bot's server involvements!</h4>
      <br />
      <Form onSubmit={handleSubmit} setToken={setToken} />
      <br />
      <CardWrapper>
        <Fragment>
          {serverData.length > 0 ? (
            serverData.map((server, i) => (
              <Card
                key={i}
                id={server.id}
                name={server.name}
                permissions={server.permissions}
              />
            ))
          ) : (
            <></>
          )}
        </Fragment>
      </CardWrapper>
    </ContentWrapper>
  )
}

const animation = keyframes`
 from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
 to  { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`
const ContentWrapper = styled.div`
  max-width: 1234px;
`
const CardWrapper = styled.div`
  max-width: 800px;
  display: grid;
  gap: 30px;
  grid-auto-rows: max-content;
  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child() {
      animation-delay: 0.5s;
    }
  }
`

export default Content
