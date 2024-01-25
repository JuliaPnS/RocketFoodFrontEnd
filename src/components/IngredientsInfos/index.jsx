import { Container } from './styles'

export function IngredientsInfos({ data, ...rest}) {
    return (
        <Container {...rest}>
            {data}
        </Container>
    )
}