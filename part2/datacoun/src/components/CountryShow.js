
const CountryShow = ({ country }) => {

    return (
        <div>
            < ul >
                {country.map(c => <li key={c.name.common}>{c.name.common}</li>)}
            </ul>
        </div>
    )
}



export default CountryShow