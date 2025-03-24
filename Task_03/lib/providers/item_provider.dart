import 'package:flutter/foundation.dart';
import '../models/item.dart';

class ItemProvider with ChangeNotifier {
  final List<Item> _items = [
    Item(
      id: '1',
      title: 'Organic Matcha Powder',
      description: 'Premium ceremonial grade matcha from Uji, Japan',
      price: 29.99,
      imageUrl: 'https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg', // Jasmine Pearl Tea
    ),
    Item(
      id: '2',
      title: 'Sencha Green Tea',
      description: 'First harvest sencha with delicate flavor',
      price: 19.99,
      imageUrl: 'https://images.unsplash.com/photo-1561047029-3000c68339ca', // Genmaicha Rice
    ),
    Item(
      id: '3',
      title: 'Jasmine Pearl Tea',
      description: 'Hand-rolled jasmine scented green tea pearls',
      price: 24.99,
      imageUrl: 'https://cdn.pixabay.com/photo/2019/08/08/13/14/hojicha-4393129_1280.jpg', // Hojicha Roasted
    ),
    Item(
      id: '4',
      title: 'Genmaicha Rice Tea',
      description: 'Green tea with roasted brown rice',
      price: 16.99,
      imageUrl: 'https://cdn.pixabay.com/photo/2018/05/15/18/57/tea-3403485_1280.jpg', // New valid URL
    ),
    Item(
      id: '5',
      title: 'Hojicha Roasted Green Tea',
      description: 'Roasted green tea with a unique flavor',
      price: 18.99,
      imageUrl: 'https://cdn.pixabay.com/photo/2019/08/08/13/14/hojicha-4393129_1280.jpg', // New valid URL
    ),
    
  ];

  List<Item> get items => _items;

  void toggleFavorite(String id) {
    final item = _items.firstWhere((item) => item.id == id);
    item.isFavorite = !item.isFavorite;
    notifyListeners();
  }
}
