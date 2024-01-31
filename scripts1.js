function obliczStawke() {
    const stawkaGraficzne = 50; // Przykładowa stawka za godzinę pracy graficznej
    const stawkaZarzadzanie = 70; // Przykładowa stawka za godzinę pracy zarządczej
    const stawkaProgramistyczne = 90; // Przykładowa stawka za godzinę pracy programistycznej

    const godzinyGraficzne = parseFloat(
        document.getElementById("graficzne").value
    );
    const godzinyZarzadzanie = parseFloat(
        document.getElementById("zarzadzanie").value
    );
    const godzinyProgramistyczne = parseFloat(
        document.getElementById("programistyczne").value
    );

    if (isNaN(godzinyGraficzne)) godzinyGraficzne = 0;
    if (isNaN(godzinyZarzadzanie)) godzinyZarzadzanie = 0;
    if (isNaN(godzinyProgramistyczne)) godzinyProgramistyczne = 0;

    const suma =
        godzinyGraficzne * stawkaGraficzne +
        godzinyZarzadzanie * stawkaZarzadzanie +
        godzinyProgramistyczne * stawkaProgramistyczne;

    document.getElementById("wynik").innerHTML = suma.toFixed(2);
}
