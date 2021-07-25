import React from "react"
import styled from "styled-components"
import axios from "axios";

const Card = ({ id, name, permissions, icon, token }) => {
  // const [approxMembers, setApproxMembers] = useState(0)
  const iconBaseURL = icon
    ? `https://cdn.discordapp.com/icons/${id}/${icon}.webp`
    : "https://cdn.discordapp.com/embed/avatars/0.png"

  // const fetchInfo = () =>
  //   fetch(`https://discordapp.com/api/guilds/${id}?with_counts=true`, {
  //     method: "get",
  //     mode: "no-cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //       Authorization: "Bot " + token,
  //     },
  //   })
  //     .then(resp => resp.json())
  //     .then(data => setApproxMembers(data.approximate_member_count))
  //     .catch(err => console.log(err))

  // useEffect(() => {
  //   setTimeout(fetchInfo, 1500 * index)
  // })


  const leaveServer = async (e) => {
    const resp = await axios.delete(`https://discordapp.com/api/users/@me/guilds/${id}`, 
        {
            headers : {
                Authorization : "Bot " + token
            }
        }
    );
  }

  return (
    <CardWrapper>
      <CardImg src={iconBaseURL} alt={name} />
      <TextWrapper>
        <h3>{name}</h3>
        <p>ID: {id}</p>
        <p>Permissions: {permissions}</p>
        <StyledButton onClick = {leaveServer}>Leave Server</StyledButton>
        {/* <p>Approx. Members: {approxMembers}</p> */}
      </TextWrapper>
    </CardWrapper>
  )
  // return <CardImg src={bannerURL} alt={name} />
}

const StyledButton = styled.button`
background: rgba(250,90,90,1);
	background: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(250,90,90,1)), to(rgba(232,81,81,1)));
	background: -webkit-linear-gradient(rgba(250,90,90,1) 0%, rgba(232,81,81,1) 100%);
	background: -moz-linear-gradient(rgba(250,90,90,1) 0%, rgba(232,81,81,1) 100%);
	background: -o-linear-gradient(rgba(250,90,90,1) 0%, rgba(232,81,81,1) 100%);
	background: linear-gradient(rgba(250,90,90,1) 0%, rgba(232,81,81,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fa5a5a', endColorstr='#e85151', GradientType=0 );
  text-decoration: none;
  color: white;
  padding: 10px 30px;
  display: inline-block;
  position: relative;
  border: 1px solid rgba(0,0,0,0.21);
  border-bottom: 4px solid rgba(0,0,0,0.21);
  border-radius: 4px;
  text-shadow: 0 1px 0 rgba(0,0,0,0.15);
  padding: 4px 12px;
  margin: 5px;
  font-size: 14px;
`

const CardImg = styled.img`
  margin-left: 20px;
  margin-top: 8px;
  width: 100px;
  height: 100px;
  border-radius: 60px;
  float: left;
`

const CardWrapper = styled.div`
  min-height: 116px;
  background: rgba(23, 12, 61, 0.5);
  display: flex;
  width: 450px;
  box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(21.8507px);
  border-radius: 16px;
`

const TextWrapper = styled.div`
  margin-top: 15px;
  margin-left: 15px;
`

export default Card
