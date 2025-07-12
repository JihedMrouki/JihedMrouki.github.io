import 'package:flutter/material.dart';

class Assets {
  Assets._();

  // Dark Theme Assets
  static const String githubDark = "assets/icons/socials/Github-dark.svg";
  static const String linkedinDark = "assets/icons/socials/Linkedin-dark.svg";
  static const String mediumDark = "assets/icons/socials/Medium-dark.svg";
  static const String xDark = "assets/icons/socials/X-dark.svg";

  // Light Theme Assets
  static const String githubLight = "assets/icons/socials/Github-light.svg";
  static const String linkedinLight = "assets/icons/socials/Linkedin-light.svg";
  static const String mediumLight = "assets/icons/socials/Medium-light.svg";
  static const String xLight = "assets/icons/socials/X-light.svg";

  static String github(BuildContext context) {
    final isDarkMode = Theme.of(context).brightness == Brightness.dark;
    return isDarkMode ? githubDark : githubLight;
  }

  static String linkedin(BuildContext context) {
    final isDarkMode = Theme.of(context).brightness == Brightness.dark;
    return isDarkMode ? linkedinDark : linkedinLight;
  }

  static String medium(BuildContext context) {
    final isDarkMode = Theme.of(context).brightness == Brightness.dark;
    return isDarkMode ? mediumDark : mediumLight;
  }

  static String x(BuildContext context) {
    final isDarkMode = Theme.of(context).brightness == Brightness.dark;
    return isDarkMode ? xDark : xLight;
  }
}
