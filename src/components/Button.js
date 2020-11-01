import React from 'react'
import Button from 'react-bootstrap/Button'
export default function ButtonComponent({name, ...rest}){
    return(
        <Button {...rest}>{name}</Button>
    )
}