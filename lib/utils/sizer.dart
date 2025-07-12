import 'package:flutter/widgets.dart';

// --- DESIGN DIMENSIONS ---
const double _designWidth = 375;
const double _designHeight = 812;

extension ResponsiveSizing on num {
  /// Calculates the height based on the device's screen height and the design height.

  double h(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;
    return (this / _designHeight) * screenHeight;
  }

  /// Calculates the width based on the device's screen width and the design width.

  double w(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    return (this / _designWidth) * screenWidth;
  }

  /// Calculates a scalable pixel value for text and other elements.

  double sp(BuildContext context) {
    return w(context);
  }
}
