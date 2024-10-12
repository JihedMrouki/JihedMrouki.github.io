import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_svg/svg.dart';

import 'package:jihedmrouki_flutter_landing_page/utils/assets.dart';
import 'package:url_launcher/url_launcher.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({super.key});

  @override
  Widget build(BuildContext context) {
    const double cHeight = 50;
    const double cWidth = 50;
    final assets = Assets();
    return SingleChildScrollView(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.only(left: 42, right: 42, top: 38),
            child: Container(
              height: cHeight,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(45),
                color: Colors.white.withOpacity(0.05),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
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
                  // Spacer(),
                  SizedBox(
                    height: 30,
                    width: 30,
                    child: GestureDetector(
                      onTap: () => launchUrl(
                        // doesnt work with mobile, needs config
                        Uri.parse(
                          'https://twitter.com/JihedMroukiDev',
                        ),
                      ),
                      child: SvgPicture.asset(
                        assets.xLight,
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
                          'https://medium.com/@jihed.mrouki',
                        ),
                      ),
                      child: SvgPicture.asset(
                        assets.mediumDark,
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
                          'https://github.com/JihedMrouki/',
                        ),
                      ),
                      child: SvgPicture.asset(
                        assets.githubDark,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(
              left: 16,
              right: 16,
              top: 40,
            ),
            child: Center(
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: const BorderRadius.only(
                    topLeft: Radius.circular(45),
                    topRight: Radius.circular(45),
                    bottomLeft: Radius.circular(45),
                    bottomRight: Radius.circular(45),
                  ),
                  color: Colors.white.withOpacity(0.05),
                ),
                height: MediaQuery.of(context).size.height * 0.7,
                width: MediaQuery.of(context).size.width * 0.99,
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(
              left: 16,
              right: 16,
              top: 40,
            ),
            child: Center(
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: const BorderRadius.only(
                    topLeft: Radius.circular(45),
                    topRight: Radius.circular(45),
                    bottomLeft: Radius.circular(45),
                    bottomRight: Radius.circular(45),
                  ),
                  color: Colors.white.withOpacity(0.05),
                ),
                height: MediaQuery.of(context).size.height * 0.7,
                width: MediaQuery.of(context).size.width * 0.99,
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(
              left: 16,
              right: 16,
              top: 40,
            ),
            child: Center(
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: const BorderRadius.only(
                    topLeft: Radius.circular(45),
                    topRight: Radius.circular(45),
                    bottomLeft: Radius.circular(45),
                    bottomRight: Radius.circular(45),
                  ),
                  color: Colors.white.withOpacity(0.05),
                ),
                height: MediaQuery.of(context).size.height * 0.7,
                width: MediaQuery.of(context).size.width * 0.99,
              ),
            ),
          ),
          const SizedBox(
            height: 30,
          )
        ],
      ),
    );
  }
}
