import { Container } from './styles';
export function Footer() {

    return (
        <Container>
            <div className="logo">
                <svg
                    width="39"
                    height="44"
                    viewBox="0 0 39 44"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        id="Polygon 1"
                        d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" />
                </svg>

                <h2>food explorer</h2>
            </div>
            <p> &copy; 2023 - Todos os direitos reservados</p>
        </Container>

    )

}