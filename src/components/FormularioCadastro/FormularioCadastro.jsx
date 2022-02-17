import React, {useState} from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';


function FormularioCadastro({aoEnviar, validarCPF}){
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
        }}>
            <TextField 
            value={nome}
            onChange={(event) => {
                setNome(event.target.value);
            }}
            id='nome' 
            label='Nome' 
            margin='normal' 
            fullWidth
            />
            <TextField 
            value={sobrenome}
            onChange={(event) => {
                setSobrenome(event.target.value);
            }}
            id='sobrenome' 
            label='Sobrenome' 
            margin='normal'
            fullWidth 
            />
            <TextField 
            value={cpf}
            onChange={(event) => {
                setCPF(event.target.value);
            }}

            onBlur={(event)=>{
                const ehValido = validarCPF(cpf); 
                setErros({cpf:ehValido})
            }}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            id='cpf' 
            label='CPF' 
            margin='normal' 
            fullWidth
            />
            <FormControlLabel 
            checked={promocoes}
            onChange={(event)=>{
                setPromocoes(event.target.checked)
            }}
            control={<Switch 
            name='promocoes'/>} 
            label='Promocoes' />
            <FormControlLabel
            checked={novidades}
            onChange={(event)=>{
                setNovidades(event.target.checked)
            }} 
            control={<Switch 
            name='novidades' />} 
            label='Novidades' />

            <Button type='submit' variant="contained">Cadastrar</Button>
        </form>        
    );
}

export default FormularioCadastro;