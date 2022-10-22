import { Card,CardBody,CardHeader,CardTitle,CardText } from "reactstrap";

export default function allProducts () {

    return (
        <>
        <div className="cardOrg">
        <Card
        className="my-2 cardStyle"
        color="dark"
        outline
        >
        <CardHeader>
        Guardanapos de Papel
Personalizados
        </CardHeader>
        <CardBody>
        <CardTitle tag="h5">
            Special Title Treatment
        </CardTitle>
        <CardText>
            With supporting text below as a natural lead-in to additional content.
        </CardText>
        </CardBody>
        </Card>

        <Card
        className="my-2 cardStyle"
        color="dark"
        outline
        >
        <CardHeader>
        Header
        </CardHeader>
        <CardBody>
        <CardTitle tag="h5">
            Special Title Treatment
        </CardTitle>
        <CardText>
            With supporting text below as a natural lead-in to additional content.
        </CardText>
        </CardBody>
        </Card>

        <Card
        className="my-2 cardStyle"
        color="dark"
        outline
        >
        <CardHeader>
        Header
        </CardHeader>
        <CardBody>
        <CardTitle tag="h5">
            Special Title Treatment
        </CardTitle>
        <CardText>
            With supporting text below as a natural lead-in to additional content.
        </CardText>
        </CardBody>
        </Card>
        </div>
        </>
    )
}