import 'package:flutter/material.dart';
import '../widgets/item_list.dart'; // Importing ProductGridItem
import 'package:provider/provider.dart';
import '../models/item.dart';
import '../providers/item_provider.dart';
import 'details_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Organic Store'),
        actions: [
          IconButton(icon: const Icon(Icons.search), onPressed: () {}),
          IconButton(icon: const Icon(Icons.shopping_cart), onPressed: () {}),
        ],
      ),
      body: Consumer<ItemProvider>(
        builder: (ctx, provider, _) => Padding(
          padding: const EdgeInsets.all(12),
          child: GridView.builder(
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 4, // Change to 4 products in a row
              childAspectRatio: 0.8, // Adjusted to fit better
              crossAxisSpacing: 8,
              mainAxisSpacing: 8,
              mainAxisExtent: 160,
            ),
            itemCount: provider.items.length,
            itemBuilder: (ctx, index) => ProductGridItem(
              item: provider.items[index], // Pass the item to ProductGridItem
              onTap: () {
                // Handle tap event
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => DetailsScreen(item: provider.items[index]),
                  ),
                );
              },
            ),
          ),
        ),
      ),
    );
  }
}
