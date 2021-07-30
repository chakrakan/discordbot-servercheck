import React, { useState, Fragment } from "react"
import styled, { keyframes } from "styled-components"
import Card from "./card"
import Form from "./form"
import globalCache from "../cache";


const Content = () => {
  //const [token, setToken] = useState("")
  const [botServers, setBotServers] = useState([])

  const handleSubmit = e => {
    e.preventDefault();
    if (globalCache.get("token") !== "") {
      fetch("https://discordapp.com/api/users/@me/guilds", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : "Bot " + globalCache.get("token"),
        },
      })
        .then(resp => resp.json())
        .then(data => setBotServers(data))
        .catch(err => console.log(err))
    }
  }

  const setToken = (event) => {
    globalCache.set("token", event);
  }

  return (
    <ContentWrapper>
      <h1>Discord Server Checker</h1>
      <h4>Check your bot's server involvements!</h4>
      <br />
      <Form onSubmit={handleSubmit} setToken={setToken} />
      <br />
      {botServers.length ? (
        <h4>Your bot is being used in {botServers.length} servers!</h4>
      ) : (
        <></>
      )}
      <br />
      <CardContainer>
        <Fragment>
          {botServers.length > 0 ? (
            botServers.map((server, i) => (
              <Card
                key={i}
                id={server.id}
                name={server.name}
                permissions={server.permissions}
                icon={server.icon}
              />
            ))
          ) : (
            <></>
          )}
        </Fragment>
      </CardContainer>
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
const CardContainer = styled.div`
  max-width: 840px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child() {
      animation-delay: 0.5s;
    }
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

export default Content;
