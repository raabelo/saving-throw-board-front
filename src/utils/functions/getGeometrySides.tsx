const getGeometrySides = (n: 6 | 12) => {
    switch (n) {
        case 6:
            return [
                { position: [1, 0, 0], rotation: [0, Math.PI / 2, 0] },
                { position: [0, 0, -1], rotation: [0, Math.PI, 0] },
                { position: [0, 1, 0], rotation: [-Math.PI / 2, 0, 0] },
                { position: [0, -1, 0], rotation: [Math.PI / 2, 0, 0] },
                { position: [0, 0, 1], rotation: [0, 0, 0] },
                { position: [-1, 0, 0], rotation: [0, -Math.PI / 2, 0] },
            ];
        case 12:
            return [
                { position: [Math.sqrt(2) / 2, Math.sqrt(2) / 2, 0], rotation: [0, 0, 0] },
                { position: [-Math.sqrt(2) / 2, Math.sqrt(2) / 2, 0], rotation: [0, Math.PI / 2, 0] },
                { position: [Math.sqrt(2) / 2, -Math.sqrt(2) / 2, 0], rotation: [0, Math.PI, 0] },
                { position: [-Math.sqrt(2) / 2, -Math.sqrt(2) / 2, 0], rotation: [0, -Math.PI / 2, 0] },
                { position: [0, Math.sqrt(2) / 2, Math.sqrt(2) / 2], rotation: [Math.PI / 2, 0, 0] },
                { position: [0, -Math.sqrt(2) / 2, Math.sqrt(2) / 2], rotation: [-Math.PI / 2, 0, 0] },
                { position: [0, Math.sqrt(2) / 2, -Math.sqrt(2) / 2], rotation: [Math.PI / 2, Math.PI, 0] },
                { position: [0, -Math.sqrt(2) / 2, -Math.sqrt(2) / 2], rotation: [-Math.PI / 2, Math.PI, 0] },
                { position: [Math.sqrt(2) / 2, 0, Math.sqrt(2) / 2], rotation: [0, 0, Math.PI / 2] },
                { position: [-Math.sqrt(2) / 2, 0, Math.sqrt(2) / 2], rotation: [0, Math.PI, Math.PI / 2] },
                { position: [Math.sqrt(2) / 2, 0, -Math.sqrt(2) / 2], rotation: [0, 0, -Math.PI / 2] },
                { position: [-Math.sqrt(2) / 2, 0, -Math.sqrt(2) / 2], rotation: [0, Math.PI, -Math.PI / 2] },
            ];

        default:
            return;
    }

    // return [
    //     { position: [1.01, 0, 0], rotation: [0, Math.PI / 2, 0] },
    //     { position: [0, 0, -1.01], rotation: [0, Math.PI, 0] },
    //     { position: [0, 1.01, 0], rotation: [-Math.PI / 2, 0, 0] },
    //     { position: [0, -1.01, 0], rotation: [Math.PI / 2, 0, 0] },
    //     { position: [0, 0, 1.01], rotation: [0, 0, 0] },
    //     { position: [-1.01, 0, 0], rotation: [0, -Math.PI / 2, 0] },
    // ];
};

export default getGeometrySides;
