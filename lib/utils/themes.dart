import 'package:flutter/material.dart';
import 'package:jihedmrouki_flutter_landing_page/utils/colors.dart';

final ThemeData darkTheme = ThemeData(
  brightness: Brightness.dark,
  primaryColor: AppColors.darkPrimary,
  scaffoldBackgroundColor: AppColors.darkBg,
  colorScheme: const ColorScheme.dark(
    primary: AppColors.darkPrimary,
    secondary: AppColors.darkSecondary,
    background: AppColors.darkBg,
    surface: AppColors.darkBgLight,
    onPrimary: AppColors.darkText,
    onSecondary: AppColors.darkText,
    onBackground: AppColors.darkText,
    onSurface: AppColors.darkText,
    error: AppColors.darkDanger,
    onError: AppColors.darkText,
    brightness: Brightness.dark,
  ),
  appBarTheme: const AppBarTheme(
    backgroundColor: AppColors.darkBgDark,
    foregroundColor: AppColors.darkText,
  ),
  textTheme: const TextTheme(
    bodyLarge: TextStyle(color: AppColors.darkText),
    bodyMedium: TextStyle(color: AppColors.darkTextMuted),
  ),
  dividerColor: AppColors.darkBorder,
  cardColor: AppColors.darkBgLight,
  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      backgroundColor: AppColors.darkPrimary,
      foregroundColor: AppColors.darkBg,
    ),
  ),
  inputDecorationTheme: const InputDecorationTheme(
    border: OutlineInputBorder(
      borderSide: BorderSide(color: AppColors.darkBorder),
    ),
    focusedBorder: OutlineInputBorder(
      borderSide: BorderSide(color: AppColors.darkPrimary),
    ),
    labelStyle: TextStyle(color: AppColors.darkTextMuted),
  ),
);

final ThemeData lightTheme = ThemeData(
  brightness: Brightness.light,
  primaryColor: AppColors.lightPrimary,
  scaffoldBackgroundColor: AppColors.lightBg,
  colorScheme: const ColorScheme.light(
    primary: AppColors.lightPrimary,
    secondary: AppColors.lightSecondary,
    background: AppColors.lightBg,
    surface: AppColors.lightBgLight,
    onPrimary: AppColors.lightText,
    onSecondary: AppColors.lightText,
    onBackground: AppColors.lightText,
    onSurface: AppColors.lightText,
    error: AppColors.lightDanger,
    onError: AppColors.lightText,
    brightness: Brightness.light,
  ),
  appBarTheme: const AppBarTheme(
    backgroundColor: AppColors.lightBgDark,
    foregroundColor: AppColors.lightText,
  ),
  textTheme: const TextTheme(
    bodyLarge: TextStyle(color: AppColors.lightText),
    bodyMedium: TextStyle(color: AppColors.lightTextMuted),
  ),
  dividerColor: AppColors.lightBorder,
  cardColor: AppColors.lightBgLight,
  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      backgroundColor: AppColors.lightPrimary,
      foregroundColor: AppColors.lightBg,
    ),
  ),
  inputDecorationTheme: const InputDecorationTheme(
    border: OutlineInputBorder(
      borderSide: BorderSide(color: AppColors.lightBorder),
    ),
    focusedBorder: OutlineInputBorder(
      borderSide: BorderSide(color: AppColors.lightPrimary),
    ),
    labelStyle: TextStyle(color: AppColors.lightTextMuted),
  ),
);
