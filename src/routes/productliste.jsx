
import { Input } from "../components/forms/input";
import { RowProduct } from "../product/rowProduit";
export default function Produits() {
    const PRODUITS = [
        {
            "nom": "Nettoyant multi-usage écologique",
            "description": "Nettoyant biodégradable pour toutes les surfaces, sans produits chimiques.",
            "quantite_en_stock": 150,
            "categorie": "Maison",
            "prix": 8.99
        },
        {
            "nom": "Éponge compostable en fibres naturelles",
            "description": "Éponge fabriquée en cellulose naturelle, compostable après usage.",
            "quantite_en_stock": 300,
            "categorie": "Maison",
            "prix": 2.50
        },
        {
            "nom": "Papier toilette recyclé",
            "description": "Papier toilette fabriqué à partir de papier recyclé, sans chlore.",
            "quantite_en_stock": 500,
            "categorie": "Maison",
            "prix": 5.00
        },
        {
            "nom": "Film alimentaire réutilisable",
            "description": "Film en cire d'abeille, lavable et réutilisable, pour conserver les aliments.",
            "quantite_en_stock": 200,
            "categorie": "Cuisine",
            "prix": 12.99
        },
        {
            "nom": "Bouteille d'eau en inox",
            "description": "Bouteille en acier inoxydable, réutilisable, pour remplacer les bouteilles en plastique.",
            "quantite_en_stock": 250,
            "categorie": "Cuisine",
            "prix": 15.00
        },
        {
            "nom": "Pailles en bambou réutilisables",
            "description": "Pailles réutilisables en bambou naturel, compostables.",
            "quantite_en_stock": 400,
            "categorie": "Cuisine",
            "prix": 7.00
        },
        {
            "nom": "Lunch box en inox",
            "description": "Boîte durable sans plastique, étanche, idéale pour les repas à emporter.",
            "quantite_en_stock": 150,
            "categorie": "Cuisine",
            "prix": 19.99
        },
        {
            "nom": "Filtres à café réutilisables en métal",
            "description": "Filtres pour cafetière en acier inoxydable, lavables et réutilisables.",
            "quantite_en_stock": 120,
            "categorie": "Cuisine",
            "prix": 10.99
        },
        {
            "nom": "Essuie-tout lavable en bambou",
            "description": "Essuie-tout fabriqué en tissu de bambou, réutilisable après lavage.",
            "quantite_en_stock": 250,
            "categorie": "Maison",
            "prix": 14.99
        },
        {
            "nom": "Brosse à dents en bambou",
            "description": "Brosse à dents biodégradable en bambou, respectueuse de l'environnement.",
            "quantite_en_stock": 500,
            "categorie": "Hygiène",
            "prix": 3.50
        },
        {
            "nom": "Shampoing solide naturel",
            "description": "Shampoing solide sans emballage plastique, formulé avec des ingrédients naturels.",
            "quantite_en_stock": 300,
            "categorie": "Hygiène",
            "prix": 9.50
        },
        {
            "nom": "Cotons démaquillants lavables",
            "description": "Disques de coton réutilisables, lavables en machine.",
            "quantite_en_stock": 200,
            "categorie": "Hygiène",
            "prix": 12.00
        },
        {
            "nom": "Déodorant naturel en pot",
            "description": "Déodorant sans aluminium, aux huiles essentielles naturelles.",
            "quantite_en_stock": 100,
            "categorie": "Hygiène",
            "prix": 8.00
        },
        {
            "nom": "Coupe menstruelle",
            "description": "Alternative écologique aux tampons et serviettes, réutilisable.",
            "quantite_en_stock": 80,
            "categorie": "Hygiène",
            "prix": 15.00
        },
        {
            "nom": "Serviettes hygiéniques lavables",
            "description": "Serviettes en coton bio, lavables et réutilisables.",
            "quantite_en_stock": 150,
            "categorie": "Hygiène",
            "prix": 16.50
        },
        {
            "nom": "Sac de courses en coton bio",
            "description": "Sac de courses durable, fabriqué en coton biologique.",
            "quantite_en_stock": 500,
            "categorie": "Accessoires",
            "prix": 7.99
        },
        {
            "nom": "Tote bag réutilisable",
            "description": "Sac en tissu de coton, pratique pour les courses.",
            "quantite_en_stock": 450,
            "categorie": "Accessoires",
            "prix": 8.99
        },
        {
            "nom": "Chaussures écologiques en matières recyclées",
            "description": "Chaussures fabriquées à partir de matériaux recyclés, durables et confortables.",
            "quantite_en_stock": 50,
            "categorie": "Mode",
            "prix": 59.99
        },
        {
            "nom": "Composteur domestique",
            "description": "Composteur pour recycler les déchets alimentaires en compost naturel.",
            "quantite_en_stock": 30,
            "categorie": "Jardinage",
            "prix": 75.00
        },
        {
            "nom": "Engrais naturel",
            "description": "Engrais fabriqué à partir de compost, sans produits chimiques.",
            "quantite_en_stock": 60,
            "categorie": "Jardinage",
            "prix": 12.00
        },
        {
            "nom": "Gants de jardin en caoutchouc naturel",
            "description": "Gants pour le jardinage, fabriqués en caoutchouc naturel.",
            "quantite_en_stock": 200,
            "categorie": "Jardinage",
            "prix": 5.99
        },
        {
            "nom": "Collecteur d'eau de pluie",
            "description": "Dispositif pour récupérer l'eau de pluie pour l'arrosage.",
            "quantite_en_stock": 15,
            "categorie": "Jardinage",
            "prix": 85.00
        },
        {
            "nom": "Chargeur solaire portable",
            "description": "Chargeur écologique fonctionnant à l'énergie solaire.",
            "quantite_en_stock": 100,
            "categorie": "High-tech",
            "prix": 29.99
        },
        {
            "nom": "Piles rechargeables",
            "description": "Piles rechargeables pour réduire les déchets de piles jetables.",
            "quantite_en_stock": 300,
            "categorie": "High-tech",
            "prix": 15.00
        },
        {
            "nom": "Liseuse en papier électronique",
            "description": "Appareil permettant de lire des livres sans papier.",
            "quantite_en_stock": 20,
            "categorie": "High-tech",
            "prix": 120.00
        },
        {
            "nom": "Bijoux en matériaux recyclés",
            "description": "Bijoux fabriqués à partir de matériaux recyclés.",
            "quantite_en_stock": 100,
            "categorie": "Mode",
            "prix": 25.00
        },
        {
            "nom": "Sacs poubelle biodégradables",
            "description": "Sacs poubelle fabriqués en matériaux biodégradables.",
            "quantite_en_stock": 250,
            "categorie": "Maison",
            "prix": 5.50
        },
        {
            "nom": "Embouts de brosse à dents recyclables",
            "description": "Embouts interchangeables et recyclables pour brosses électriques.",
            "quantite_en_stock": 180,
            "categorie": "Hygiène",
            "prix": 4.50
        },
        {
            "nom": "Lessive écologique en poudre",
            "description": "Lessive biodégradable, sans produits chimiques.",
            "quantite_en_stock": 120,
            "categorie": "Maison",
            "prix": 10.00
        },
        {
            "nom": "Savon à vaisselle solide",
            "description": "Alternative zéro déchet pour la vaisselle, sans plastique.",
            "quantite_en_stock": 150,
            "categorie": "Cuisine",
            "prix": 6.00
        },
        {
            "nom": "Chaussettes en coton biologique",
            "description": "Chaussettes confortables fabriquées en coton bio.",
            "quantite_en_stock": 300,
            "categorie": "Mode",
            "prix": 8.00
        },
        {
            "nom": "Masque facial en tissu réutilisable",
            "description": "Masque en tissu lavable, fabriqué en coton bio.",
            "quantite_en_stock": 200,
            "categorie": "Hygiène",
            "prix": 4.00
        },
        {
            "nom": "Boîte à compost pour cuisine",
            "description": "Boîte pour collecter les déchets",
            "quantite_en_stock": 15,
            "categorie": "Cuisine",
            "prix": 14.00
        }
    ]
    return (
    <div>
        <h1>Liste des produits</h1>
        <hr />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ratione pariatur commodi quibusdam laboriosam porro reprehenderit modi enim inventore consectetur culpa, tempora sapiente fugiat? Natus at perferendis minus tenetur possimus?</p>
        <div>
            <BarreRecherche />
            <TableProduit produits = {PRODUITS} />
        </div>
    </div>
    );
    function BarreRecherche () {
        return <div>
            <div className="mb-3">
                <Input value="" onChange={() => null} placeholder="Rechercher un produit..." />
            </div>
        </div>
    }

    
    function TableProduit({produits}) {
        const lines = []
        for (let p of produits) {
            lines.push(<RowProduct produit = {p} key={p.nom} />) 
        }
        return <table className="table">
            <thead>
                <tr>
                    <th>Désignation</th>
                    <th>Prix ($)</th>
                    <th>En stock</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {lines}
            </tbody>
        </table>
    }
};