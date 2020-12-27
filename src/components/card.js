import React from "react"

const Card = ({ id, name, permissions }) => {
  // const bannerURL = `https://discordapp.com/api/guilds/${id}/widget.png?style=banner2`
  return (
    <div>
      <h4>{name}</h4>
      <p>ID:{id}</p>
      <p>Permissions: {permissions}</p>
    </div>
  )
  // return <CardImg src={bannerURL} alt={name} />
}

// const CardImg = styled.img``

export default Card
