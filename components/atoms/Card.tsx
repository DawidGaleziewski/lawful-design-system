import React, { ReactElement } from "react";
import { Button, ButtonVariants, IButtonProps } from "./Button";
import { Text, TextVariant, IText } from "./Text";


enum CardVariants {
    LIGHT = "lingth"
}

interface ICardProps{
    variant: CardVariants;
    children: [React.ReactElement<IText>, React.ReactElement<IButtonProps>];
}

export const Card = (props: ICardProps) => <div>{props.children}</div>

const CardButton = (props:IButtonProps) => <Button variant={ButtonVariants.SECONDARY}>{props.children}</Button>;

Card.Button = CardButton;

const CardTitle:React.VFC<IText> = (props) => <Text>{props.children}</Text>;

Card.Title = CardTitle;

const CardTest = () => {
    return <Card variant={CardVariants.LIGHT}>
       <Card.Title variant={TextVariant.LINK}>Test</Card.Title>
       <Card.Button variant={ButtonVariants.PRIMARY}>Test</Card.Button>
    </Card>
}