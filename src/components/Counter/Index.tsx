import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { CounterContainer } from './style'

export function Counter() {
    const [amount, setAmount] = useState(1);
    function handleIncreaseAmount() {
        setAmount(state => state + 1);
    }

    function handleDecreaseAmount() {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    }

    return (
        <CounterContainer>
            <button

                type="button"
                aria-hidden="true"
                onClick={() => {
                    handleDecreaseAmount();
                }}
            >
                <Minus size={16} weight="bold" />
            </button>
            <input type="number" min={1} value={amount} readOnly />

            <button
                type="button"
                aria-hidden="true"
                onClick={() => {
                    handleIncreaseAmount();
                }}
            >
                <Plus size={16} weight="bold" />
            </button>
        </CounterContainer>
    )

}