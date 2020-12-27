import React from "react"
import styled from "styled-components"

const Form = ({ onSubmit, setToken }) => {
  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <label>
          Bot Token:
          <input
            type="text"
            name="token"
            onChange={e => setToken(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </FormWrapper>
  )
}

const FormWrapper = styled.div``

export default Form
