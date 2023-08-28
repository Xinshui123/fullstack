const CountryInfo = ({ country }) => {
    const languages = Object.values(country[0].languages);

    return (
        <div>
            <h1>
                {country[0].name.common}
            </h1>
            <p>capital&nbsp;{country[0].capital[0]}</p>
            <p>area&nbsp;{country[0].area}</p>
            <br />
            <h1>languages:</h1>
            < ul >
                {languages.map(c => <li key={c}>{c}</li>)}
            </ul>
            <img src={country[0].flags.png}></img>
        </div>
    )
}



export default CountryInfo