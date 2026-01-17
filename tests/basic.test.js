import { getNumber, getResult, getString, getLength } from '../src/basic';

describe("Variables en JS", () => {
    it("Completa todas las constantes que faltan", () => {
        const a = 10;
        const b = 1.34;
        const c = true;
        const d = "Buenos días";
        const e = "Pepe";
        const f = "Buenos días, pepe";

        expect(a).toBe(10);
        expect(b).toBe(1.34);
        expect(c).toBeTruthy();
        expect(d).toBe("Buenos días");
        expect(e).toBe("Pepe");
        expect(f).toBe("Buenos días, pepe");
    });

    it("Completa todas las variables que faltan para que las operaciones resulten correctamente", () => {
        let a = 11;
        let b = 0.34;
        let c = 10;
        let d = 10;
        let e = 350;
        let f = 10;
        let g = 3;
        let x = 2; 
        let y = 3; 

        expect(a + b).toBe(11.34);
        expect(a * c).toBe(110);
        expect(d - e).toBe(-340);
        expect(f ** g).toBe(1000);
        expect(x % 2).toBe(0);
        expect(y % 2).toBe(1);
    });

    it("Completa todas las variables que faltan para que se cumplan las condiciones", () => {
        let a = 10;
        let b = 100;
        let c = undefined;
        let d = "Hola";
        let n = "Zebra"; 

        expect(a > 9).toBeTruthy();
        expect(a < 11).toBeTruthy();
        expect(b === 100).toBeTruthy();
        expect(c === undefined).toBeTruthy();
        expect(d !== "Hello").toBeTruthy();
        expect(n.startsWith('A')).toBeFalsy();
    });
});

describe("condicionales en javascript", () => {
    it("completa el valor del resultado esperado (expected)", () => {
        let name = "Pepe";
        let result = "KO";

        if (name.length === 6) {
            result = "OK"
        };
        expect(result).toBe("KO");
    });

    it("comparando cadenas (strings)", () => {
        let a = 'a';
        let b = 'b';
        let result;

        if (a < b) {
            result = 'pikachu';
        } else {
            result = 'charmander';
        };

        expect(result).toBe("pikachu");
    });

    it("Interpolación de cadenas (strings) (1)", () => {
        let n = "Piña";
        let m = "Pepperoni";
        let q = 14;
        let result;

        if (q % 5 === 0) {
            result = "Pizza con " + n;
        } else {
            result = "Pizza con " + m;
        };

        expect(result).toBe("Pizza con Pepperoni");
    });

    it("Interpolación de cadenas (strings) (2)", () => {
        let n = "Piña";
        let m = "Pepperoni";
        let q = 14;
        let result;

        if (q % 7 === 0) {
            result = `Pizza con ${n}`;
        } else {
            result = `Pizza con ${m}`;
        };

        expect(result).toBe("Pizza con Piña");
    });
});

describe("Funciones en JS", () => {
    it('¿Cuál es el resultado de invocar la función getNumber?', () => {
        let result = getNumber();
        // 1 + 1 = 2
        expect(result).toBe(2);
    });

    it("¿Cuál es el resultado de invocar la función getResult?", () => {
        let result = getResult(10, 30, 2);
        // La fórmula es: b - a + 4 * c -> 30 - 10 + 4 * 2 -> 20 + 8 = 28
        expect(result).toBe(28);
    });

    it("¿Cuál es el resultado de invocar la función getString?", () => {
        let result = getString("Cerebro", "Pinky");
        // La función devuelve: `Son ${m} y ${n}` -> "Son Pinky y Cerebro"
        expect(result).toBe("Son Pinky y Cerebro");
    });

    it("¿Cuál es el resultado de invocar la función getLength?", () => {
        // "khaleesi mother of dragons breaker of chains" tiene 45 letras (>= 12)
        expect(getLength("khaleesi mother of dragons breaker of chains")).toBe("very long");
        
        // "sarah" tiene 5 letras (> 4 y < 7)
        expect(getLength("sarah")).toBe("adecquate");
        
        // "bob" tiene 3 letras (<= 4)
        expect(getLength("bob")).toBe("too short");
        
        // "robertson" tiene 9 letras (>= 7 y < 12)
        expect(getLength("robertson")).toBe("long");
    });
});