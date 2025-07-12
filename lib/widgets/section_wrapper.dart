import 'package:flutter/material.dart';
import 'package:jihedmrouki_flutter_landing_page/utils/context_extension.dart';
import 'package:jihedmrouki_flutter_landing_page/utils/sizer.dart';

class SectionWrapper extends StatelessWidget {
  final String title;
  final Widget child;

  const SectionWrapper({
    super.key,
    required this.title,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: 24.w(context),
        vertical: 40.h(context),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: context.theme.textTheme.displaySmall?.copyWith(
              fontWeight: FontWeight.bold,
              color: context.theme.colorScheme.primary,
            ),
          ),
          SizedBox(height: 24.h(context)),
          child,
        ],
      ),
    );
  }
}
