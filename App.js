import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const productData = [
  {
    id: 1,
    title: "Paneer",
    description: "A vertical shot of traditional Indian paneer butter masala or cheese cottage curry on a black surface",
    price: 49.99,
    rating: 4.5,
    category: "food",
    image: "https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?t=st=1721589985~exp=1721593585~hmac=92cbffef69b767ddc437b4151cbeb58024e7f84e963f1cee1414381fc533effa&w=360",
  },
  {
    id: 2,
    title: "omelet egg",
    description: "Protein rich, fried eggs omelet on the table",
    price: 129.99,
    rating: 4.8,
    category: "food",
    image: "https://img.freepik.com/free-photo/high-angle-omelette-plate-with-tomatoes-breakfast_23-2148417396.jpg?t=st=1721655860~exp=1721659460~hmac=d6bf9ffd261c38c18b9beb34f700ec4d5b2f16831ec079d6835afe93e8f1cd5c&w=900",
  },
  {
    id: 3,
    title: "kurkure",
    description: "Snacks for evening, corn chips of triangular shape levitate on a white background",
    price: 34.99,
    rating: 4.6,
    category: "food",
    image: "https://img.freepik.com/premium-photo/delicious-homemade-kurkure-snack-white-background_75648-12105.jpg?w=360",
  },
  {
    id: 4,
    title: "chocolates",
    description: "Less in calories, no sugar",
    price: 199.99,
    rating: 4.9,
    category: "food",
    image: "https://img.freepik.com/free-vector/chocolate-bars-set_1284-13307.jpg?t=st=1721655948~exp=1721659548~hmac=e237a6e07bb6d68efa4e3aff116104919c97ff28e56aa831276b5fd469f09566&w=740",
  },
];

// StartPage Component
const StartPage = ({ navigation }) => (
  <ImageBackground source={{ uri: 'https://wallpapercave.com/wp/wp3104899.jpg' }} style={styles.imageBackground}>
  <View style={styles.container}>
    <Text style={styles.title}>WELCOME TO  FOOD STALL!</Text>
    <Button title="Getting Started" color="#4CAF50" onPress={() => navigation.navigate('Signup')} />
  </View>
  </ImageBackground>
);

// Signup Component
const Signup = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/b8/57/f6/b857f6eeed86bc1eda743afec402b194.jpg' }} style={styles.imageBackground}>
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
      <Button title="Sign Up" color="#4CAF50" onPress={() => navigation.navigate('Login')} />
    </View>
    </ImageBackground>
  );
};

// Login Component
const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/b8/57/f6/b857f6eeed86bc1eda743afec402b194.jpg' }} style={styles.imageBackground}>
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Login" color="#4CAF50" onPress={() => navigation.navigate('Welcome', { username })} />
    </View>
    </ImageBackground>
  );
};

// WelcomePage Component
const WelcomePage = ({ navigation, route }) => {
  const { username } = route.params;

  return (
    <ImageBackground source={{ uri: 'https://th.bing.com/th/id/R.b0c3604c780357793242b7086fd4db19?rik=3F%2fEHzkDjxqaeA&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f0%2f57%2fk5F1Ja.jpg&ehk=ftMk9u%2fC%2b%2byes85jeSpeDpHNnhKkcclkoIsDK3EtoEE%3d&risl=&pid=ImgRaw&r=0' }} style={styles.imageBackground}>
    <View style={styles.container}>
      <Text style={styles.welcomeText}>WELCOME {username}!</Text>
      <View style={styles.buttonContainer}>
        <Button title="View Products" color="#4CAF50" onPress={() => navigation.navigate('ProductsDrawer', { username })} />
        <Button title="View Favorites" color="#4CAF50" onPress={() => navigation.navigate('Favorites', { username })} />
        <Button title="View Cart" color="#4CAF50" onPress={() => navigation.navigate('Cart', { username })} />
        <Button title="Log Out" color="#4CAF50" onPress={() => navigation.navigate('Start')} />
      </View>
    </View>
    </ImageBackground>
  );
};

// ProductCard Component
const ProductCard = ({ product, isFavorite, onToggleFavorite, onAddToCart }) => (
  <View style={styles.card}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <Text style={styles.cardTitle}>{product.title}</Text>
    <Text style={styles.cardDescription}>{product.description}</Text>
    <Text style={styles.cardPrice}>${product.price.toFixed(2)}</Text>
    <Text style={styles.cardRating}>Rating: {product.rating} ★</Text>
    <TouchableOpacity style={styles.favoriteButton} onPress={() => onToggleFavorite(product)}>
      <Text style={styles.favoriteButtonText}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.addToCartButton} onPress={() => onAddToCart(product)}>
      <Text style={styles.addToCartButtonText}>Add to Cart</Text>
    </TouchableOpacity>
  </View>
);

// ProductPage Component
const ProductPage = ({ username, favorites, setFavorites, cart, setCart }) => {
  const handleToggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some(fav => fav.id === product.id)) {
        return prevFavorites.filter(fav => fav.id !== product.id);
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.some(item => item.id === product.id)) {
        return prevCart;
      } else {
        return [...prevCart, product];
      }
    });
  };

  return (
    <ImageBackground source={{ uri: 'https://img.freepik.com/premium-photo/food-cooking-background-stone-texture-with-sea-salt-pepper-garlic-parsley-light-grey-abstract-food-background-empty-space-text-can-be-used-food-posters-design-menu-top-view_253362-16400.jpg?w=2000' }} style={styles.imageBackground}>
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Products</Text>
      <Text style={styles.welcomeText}>Welcome, {username}!</Text>
      <ScrollView>
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.some(fav => fav.id === product.id)}
            onToggleFavorite={handleToggleFavorite}
            onAddToCart={handleAddToCart}
          />
        ))}
      </ScrollView>
    </View>
    </ImageBackground>
  );
};

// ProductsDrawer Component
const ProductsDrawer = ({ route }) => {
  const { username } = route.params;
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <Drawer.Navigator
      initialRouteName="Products"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#4CAF50' },
        headerTintColor: '#fff',
        drawerStyle: { backgroundColor: '#fff', width: 240 },
        drawerActiveTintColor: '#4CAF50',
        drawerInactiveTintColor: '#000',
      }}
    >
      <Drawer.Screen name="Products">
        {props => <ProductPage {...props} username={username} favorites={favorites} setFavorites={setFavorites} cart={cart} setCart={setCart} />}
      </Drawer.Screen>
      <Drawer.Screen name="Favorites">
        {props => <FavoritesPage {...props} username={username} favorites={favorites} setFavorites={setFavorites} />}
      </Drawer.Screen>
      <Drawer.Screen name="Cart">
        {props => <CartPage {...props} username={username} cart={cart} setCart={setCart} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

// FavoritesPage Component
const FavoritesPage = ({ username, favorites, setFavorites }) => (
  <ImageBackground source={{ uri: 'https://img.freepik.com/premium-photo/food-cooking-background-stone-texture-with-sea-salt-pepper-garlic-parsley-light-grey-abstract-food-background-empty-space-text-can-be-used-food-posters-design-menu-top-view_253362-16400.jpg?w=2000' }} style={styles.imageBackground}>
  <View style={styles.container}>
    <Text style={styles.welcomeText}>Favorites</Text>
    <Text style={styles.welcomeText}>Welcome, {username}!</Text>
    <ScrollView>
      {favorites.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite
          onToggleFavorite={(product) => setFavorites(favorites.filter(fav => fav.id !== product.id))}
          onAddToCart={() => {}}
        />
      ))}
    </ScrollView>
  </View>
  </ImageBackground>
);

// CartPage Component
const CartPage = ({ username, cart, setCart }) => (
  <ImageBackground source={{ uri: 'https://img.freepik.com/premium-photo/food-cooking-background-stone-texture-with-sea-salt-pepper-garlic-parsley-light-grey-abstract-food-background-empty-space-text-can-be-used-food-posters-design-menu-top-view_253362-16400.jpg?w=2000' }} style={styles.imageBackground}>
  <View style={styles.container}>
    <Text style={styles.welcomeText}>Cart</Text>
    <Text style={styles.welcomeText}>Welcome, {username}!</Text>
    <ScrollView>
      {cart.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={false}
          onToggleFavorite={() => {}}
          onAddToCart={() => {}}
        />
      ))}
    </ScrollView>
  </View>
  </ImageBackground>
);

// CustomDrawerContent Component
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log Out"
        onPress={() => props.navigation.navigate('Start')}
      />
    </DrawerContentScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartPage} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={WelcomePage} options={{ headerShown: false }} />
        <Stack.Screen name="ProductsDrawer" component={ProductsDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  input: {
    width: '100%',
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardRating: {
    fontSize: 16,
    marginBottom: 8,
  },
  favoriteButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  favoriteButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: '#FF5722',
    padding: 8,
    borderRadius: 4,
  },
  addToCartButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
