import 'package:flutter/material.dart';

extension BuildContextExtensions on BuildContext {
  /// A convenient way to get the ThemeData for the current context.
  /// Usage: `context.theme`
  ThemeData get theme => Theme.of(this);
}
