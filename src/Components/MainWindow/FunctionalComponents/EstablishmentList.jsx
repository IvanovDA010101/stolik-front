export const EstablishmentList = ({ establishments }) => {
    return (
        <div>
            {establishments.map((establishment) => (
                <div key={establishment.id}>
                    <img src={establishment.imageUrl} alt={establishment.name} />
                    <p>{establishment.name}</p>
                </div>
            ))}
        </div>
    );
}