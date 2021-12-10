import React, { Component } from "react";
import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Title, Background, Content, FormContainer, Form, Input, Button } from './styles';

 
class FormComponent extends Component {

    render() {

        return (
            <Container>
                <Background />
                <Content>
                    <FormContainer>
                        <Title>Formulário</Title>
                        <Form>
                            
                           <Input name="email" icon={FiMail} placeholder="E-mail" maxLength={100} />
                            <Input
                                name="password"
                                icon={FiLock}
                                placeholder="Senha"
                                type="password"
                                minLength={8}
                                maxLength={8}
                            />
                            <Button type="submit">Cadastrar</Button>
                        </Form>
                    </FormContainer>
                </Content>
            </Container>
        )
    }
}
export default FormComponent;