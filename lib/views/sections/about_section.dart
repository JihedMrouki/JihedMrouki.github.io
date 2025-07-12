import 'package:flutter/material.dart';
import 'package:jihedmrouki_flutter_landing_page/utils/context_extension.dart';
import 'package:jihedmrouki_flutter_landing_page/widgets/section_wrapper.dart';

class AboutSection extends StatelessWidget {
  const AboutSection({super.key});

  @override
  Widget build(BuildContext context) {
    return SectionWrapper(
      title: "About Me",
      child: Text(
        "I am a passionate Flutter developer with a love for creating beautiful, "
        "responsive, and highly performant applications. I thrive on solving "
        "complex problems and continuously learning new technologies.",
        style: context.theme.textTheme.bodyLarge?.copyWith(height: 1.5),
      ),
    );
  }
}
