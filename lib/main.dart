import 'package:flutter/material.dart';
import 'package:jihedmrouki_flutter_landing_page/animated_background.dart';
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
      theme: ThemeData(
        fontFamily: 'AfacadFlux',
        primarySwatch: Colors.purple,
        useMaterial3: true,
      ),
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
    return BackgroundWidget(
      child: Scaffold(
        backgroundColor: Colors.transparent,
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          title: const Text(
            "LandingPage(): Jihed Mrouki",
            style: TextStyle(
              color: Colors.white,
            ),
          ),
        ),
        body: const MainScreen(),
      ),
    );
  }
}
