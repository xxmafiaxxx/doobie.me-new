import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Gmap = () => {
    return (
			<MapContainer
				className="markercluster-map"
				center={[40.776676, -73.971321]}
				zoom={10}
				maxZoom={28}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
			</MapContainer>
		);
};

export default Gmap;
