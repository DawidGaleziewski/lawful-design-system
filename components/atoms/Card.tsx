import React, { ReactElement } from "react";
import { Button, ButtonVariants, IButtonProps } from "./Button";


enum CardVariants {
    LIGHT = "lingth"
}

interface ICardProps{
    variant: CardVariants;
    children: React.ReactElement<IButtonProps>;
}

export const Card = (props: ICardProps) => <div>{props.children}</div>

const CardButton:React.FC<IButtonProps> = (props) => <Button variant={ButtonVariants.SECONDARY}>{props.children}</Button>;

Card.Button = CardButton;

const CardTest = () => {
    return <Card>
        <Button variant={ButtonVariants.SECONDARY}>test</Button>
        <div>TEst</div>
    </Card>
}