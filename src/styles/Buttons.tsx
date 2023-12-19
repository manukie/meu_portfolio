import styled from "styled-components"

export const StyledButton1 = styled.button`
    font-family: var(--Font-Primary);
    font-size: 1.6rem;
    font-weight: 600;
    width: 15.5rem;
    height: 4.6rem;
    color: var(--color-gray-100);
    background: var(--color-primary);
    border-radius: 10px;
    border: none;

    &:hover {
    background: var(--color-primary-50);
    color: var(--color-gray-100);
    transition: background 0.2s ease;
  }
`

export const StyledButton2 = styled.button`
    font-family: var(--Font-Primary);
    font-size: 1.6rem;
    font-weight: 600;
    width: 12rem;
    height: 4.2rem;
    color: var(--color-gray-100);
    background: var(--color-gray-400);
    border-radius: 10px;

    &:hover {
    background: var(--color-gray-100);
    color: var(--color-gray-400);
    transition: background 0.2s ease;
  }
`

export const StyledButton3 = styled.button`
    font-family: var(--Font-Primary);
    font-size: 1.6rem;
    font-weight: 600;
    width: 10rem;
    height: 3.5rem;
    color: var(--color-gray-100);
    background: var(--color-primary);
    border-radius: 10px;

    &:hover {
    background: var(--color-primary-50);
    color: var(--color-gray-100);
    transition: background 0.2s ease;
  }
`

export const StyledButton4 = styled.button`
    font-family: var(--Font-Primary);
    font-size: 1.6rem;
    font-weight: 600;
    width: 5rem;
    height: 4.5rem;
    color: var(--color-gray-100);
    background: var(--color-twitter);
    border-radius: 100%;
    border: none;

    &:hover {
    background: var(--color-gray-400);
    color: var(--color-gray-300);
    transition: background 0.2s ease;
  }
`

export const StyledButton5 = styled.p`
    font-family: var(--Font-Primary);
    font-size: 1.5rem;
    font-weight: 550;
    color: var(--color-gray-300);
    cursor: pointer;


    &:hover {

    color: var(--color-gray-200);
    transition: 0.2s ease;
  }
`

export const StyledButton5Deactivated = styled.p`
    font-family: var(--Font-Primary);
    font-size: 1.6rem;
    font-weight: 550;
    color: var(--color-gray-100);
    user-select: none;
`

export const LinkedinButton = styled.button`
     color: var(--color-gray-100);
     font-size: 1.5rem;
     font-family: var(--Font-Primary);
     cursor: pointer;
     background-color: var(--color-linkedin);
     border: none;
     width: 10rem;
     height: 3rem;
     border-radius: 1rem;

     &:hover {
    background-color: var(--color-tertiary-50);
    transition: background 0.2s ease;
}
`


