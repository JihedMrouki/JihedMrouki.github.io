import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

import 'package:jihedmrouki_flutter_landing_page/utils/assets.dart';
import 'package:url_launcher/url_launcher.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final assets = new Assets();
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        SizedBox(
          height: 30,
          width: 30,
          child: GestureDetector(
            onTap: () => launchUrl(
              // doesnt work with mobile, needs config
              Uri.parse(
                'https://www.linkedin.com/in/jihed-mrouki/',
              ),
            ),
            child: SvgPicture.asset(
              assets.linkedinDark,
              color: Colors.white,
            ),
          ),
        ),
        SizedBox(
          height: 30,
          width: 30,
          child: GestureDetector(
            onTap: () => launchUrl(
              // doesnt work with mobile, needs config
              Uri.parse(
                'https://www.linkedin.com/in/jihed-mrouki/',
              ),
            ),
            child: SvgPicture.asset(
              assets.linkedinDark,
              color: Colors.white,
            ),
          ),
        ),
      ],
    );
  }
}
