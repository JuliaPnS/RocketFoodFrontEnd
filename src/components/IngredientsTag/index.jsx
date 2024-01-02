import { Container } from './styles'
import { PiX, PiPlus } from "react-icons/pi";

export function IngredientsTag({ $isNew, value, onClick, ...rest }) {
    return (
        <Container $isNew={$isNew}>
            <input
                type="text"
                value={value}
                readOnly={!$isNew}
                {...rest}
            />

            <button
                type="button"
                onClick={onClick} 
                className={$isNew ? 'button-add' : 'button-delete'}
                >
                

                {$isNew ? <PiPlus /> : <PiX />}

            </button>

        </Container>
    )
}