import { Container } from './styles'

export function IngredientsTag({ icon:Icon, add = false, title, ...rest}) {
    return (
        <Container {...rest}>
            {title}
            {Icon && <Icon/>}
        </Container>
    )
}