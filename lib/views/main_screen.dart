import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:jihedmrouki_flutter_landing_page/utils/assets.dart';
import 'package:jihedmrouki_flutter_landing_page/utils/context_extension.dart';
import 'package:jihedmrouki_flutter_landing_page/utils/sizer.dart';
import 'package:jihedmrouki_flutter_landing_page/views/sections/about_section.dart';
import 'package:url_launcher/url_launcher.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: <Widget>[
        _buildSocialLinksBar(context),

        AboutSection(),
        // CareerSection(),
        // ProjectsSection(),
        // ContactSection(),
        SizedBox(height: 40.h(context)),
      ],
    );
  }

  /// Helper method to build the social links bar for a cleaner build method.
  Widget _buildSocialLinksBar(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(
        horizontal: 42.w(context),
        vertical: 38.h(context),
      ),
      child: Container(
        height: 50.h(context),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(45.sp(context)),
          // Using the theme's cardColor makes it adaptive.
          color: context.theme.cardColor,
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            _socialIcon(context, Assets.linkedinDark,
                'https://www.linkedin.com/in/jihed-mrouki/'),
            _socialIcon(
                context, Assets.xLight, 'https://twitter.com/JihedMroukiDev'),
            _socialIcon(
                context, Assets.mediumDark, 'https://medium.com/@jihed.mrouki'),
            _socialIcon(
                context, Assets.githubDark, 'https://github.com/JihedMrouki/'),
          ],
        ),
      ),
    );
  }

  /// Helper for creating a single social icon to avoid code repetition.
  Widget _socialIcon(BuildContext context, String assetPath, String url) {
    return SizedBox(
      height: 30.sp(context),
      width: 30.sp(context),
      child: GestureDetector(
        onTap: () => launchUrl(Uri.parse(url)),
        child: SvgPicture.asset(
          assetPath,
          colorFilter: ColorFilter.mode(
            context.theme.colorScheme.onSurface,
            BlendMode.srcIn,
          ),
        ),
      ),
    );
  }
}
