import React, {useState} from 'react'
import {useHttp} from "../../hooks/http.hook";
import './contact.css'

export const Contact = () => {
    const {loading, request} = useHttp()
    const [form, setForm] = useState( {name:'', email:'', text:''})

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const contactHeadler = async () => {
        try {
            const data = await request('api/contact', 'POST', {...form})
            console.log('Data', data)
        } catch (e) {

        }
    }

    return (
        <form id='contact'>
            <label htmlFor='Contact form'>Contact us</label>
            <input placeholder='Your name' id='name' type='text' name='name' onChange={changeHandler}/>
            <input placeholder='Your email' id='email' type='email' name='email' onChange={changeHandler}/>
            <input placeholder='Your massege' id='text' type='text' name='text' onChange={changeHandler}/>
            <button className='btm' onClick={contactHeadler} disabled={loading}>Submit</button>
        </form>
    )
}
