#!/bin/bash
# Test all locale-prefixed routes return 200
ROUTES=(
  /en /ar
  /en/Dashboard /ar/Dashboard
  /en/logInManageBlayList /ar/logInManageBlayList
  /en/logInManageBlayList/manageBlayList /ar/logInManageBlayList/manageBlayList
  /en/FAQ /ar/FAQ
  /en/DownloadAndWatching /ar/DownloadAndWatching
  /en/legal-policy /ar/legal-policy
  /en/legal-policy/TermsAndConditions /ar/legal-policy/TermsAndConditions
  /en/legal-policy/privacyPolicy /ar/legal-policy/privacyPolicy
  /en/legal-policy/CompanyInfo /ar/legal-policy/CompanyInfo
  /en/legal-policy/DisclaimerOfContent /ar/legal-policy/DisclaimerOfContent
  /en/legal-policy/EULA /ar/legal-policy/EULA
  /en/legal-policy/GlobalCompliance /ar/legal-policy/GlobalCompliance
  /en/legal-policy/NotSellOrShare /ar/legal-policy/NotSellOrShare
  /en/legal-policy/OurMission /ar/legal-policy/OurMission
  /en/legal-policy/RefundPolicy /ar/legal-policy/RefundPolicy
  /en/agreement /ar/agreement
  /en/agreement/customer /ar/agreement/customer
  /en/agreement/reseller /ar/agreement/reseller
  /en/chat /ar/chat
  /en/agreement/customer /ar/agreement/customer
  /en/robots.txt /ar/robots.txt
)
FAIL=0
for r in "${ROUTES[@]}"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000$r")
  status="OK"
  [ "$code" != "200" ] && { status="FAIL"; FAIL=1; }
  echo "$code $status $r"
done
echo "FAILURES=$FAIL"
