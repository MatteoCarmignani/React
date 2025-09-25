const infos = [
{
    id: 1,
    symbol: "buy-comics-digital-comics.png",
    title: "DIGITAL COMICS",
  },
{
    id: 2,
    symbol: "buy-comics-merchandise.png",
    title: "DC MERCHANDISE",
},
{
    id: 3,
    symbol: "buy-comics-subscriptions.png",
    title: "SUBSCRIPTION",
},
{
    id: 4,
    symbol: "buy-comics-shop-locator.png",
    title: "COMIC SHOP LOCATOR"
},
{
    id: 5,
    symbol: "buy-dc-power-visa.svg",
    title: "DC POWER VISA",
}

]

const BlueBarSection = () => {
    return (
        <>
            {infos.map(info => (
                <div className="item" key={info.id}>
                    <img src={info.symbol} alt={info.symbol} />
                    <span>{info.title}</span>
                </div>
            ))}
        </>
    );
}

export default BlueBarSection