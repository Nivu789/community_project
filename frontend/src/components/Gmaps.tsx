import { GoogleMap, useLoadScript, Marker, Libraries } from '@react-google-maps/api'

const libraries:Libraries = ['places'];
const Gmaps = () => {

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCpCz0JvKaEh3cy8ZjdaBESJLoAkiBZJO0',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className='h-full'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default Gmaps