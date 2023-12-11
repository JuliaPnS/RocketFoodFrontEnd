import { Container } from './styles'

export function IngredientsInfos({ title, ...rest}) {
    return (
        <Container {...rest}>
            {title}
        </Container>
    )
}