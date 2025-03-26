import { GoogleMap, useLoadScript, Marker, Libraries } from '@react-google-maps/api'

const libraries:Libraries = ['places'];
const Gmaps = () => {

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};
const center = {
  lat: 12.354771798392308,// default latitude
  lng: 75.09777343380834, // default longitude
};

const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDWIa-8lu1_f9OygTJwlaPwZ1SqzbydF7k',
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
        zoom={18}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default Gmaps