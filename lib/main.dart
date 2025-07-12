import 'package:flutter/material.dart';
import 'package:jihedmrouki_flutter_landing_page/utils/themes.dart';
import 'package:jihedmrouki_flutter_landing_page/views/main_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Jihed Mrouki github.io',
      theme: lightTheme,
      darkTheme: darkTheme,
      themeMode: ThemeMode.system,
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({
    super.key,
  });

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          textAlign: TextAlign.left,
          "Jihed Mrouki",
        ),
      ),
      body: const MainScreen(),
    );
  }
}
