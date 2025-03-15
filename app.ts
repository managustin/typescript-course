//  Type aliases allow you to create custom names for complex types, making your code more readable and maintainable.

type Coordinate = [number, number]
type List = string[][];

function compareCoords(
    p1: Coordinate, 
    p2: Coordinate
): [number, number] {
    return [p1[0], p2[1]]
}

const coords: Coordinate[] = [];
