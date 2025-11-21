# GA4 Workshop Registration Funnel - Testing Guide

## Overview

**Tracking Method**: Cross-Domain Tracking (Method 2)
- Users click links from virtualgenius.com → ti.to registration pages
- GA4 tracks clicks on your site, attempts to maintain session to ti.to
- UTM parameters track traffic sources in both GA4 and Ti.to

**What This Tracks:**
✅ Registration button clicks on your website
✅ Which pages/CTAs drive the most clicks
✅ Traffic sources and campaigns
✅ Workshop interest levels (Dec vs Apr)
✅ Conversion value (workshop price)

**What This Does NOT Track:**
❌ Registration completion events in GA4
❌ Purchase revenue in GA4 ecommerce
❌ Which specific users completed registration

---

## Pre-Testing Setup

**Required Access:**
- [ ] Google Analytics 4 account access (property G-ST954G5FLN)
- [ ] Ti.to dashboard access (for checking referrer data)
- [ ] Chrome browser with DevTools

**Before Testing:**
1. Ensure changes are deployed to virtualgenius.com (check GitHub Actions)
2. Open Google Analytics in one browser tab: [analytics.google.com](https://analytics.google.com)
3. Navigate to Reports → Realtime

---

## Step-by-Step Testing Procedure

### Test 1: Cross-Domain Tracking Parameter

**Purpose**: Verify GA4 linker plugin is appending session data to Ti.to URLs

1. Open Chrome → DevTools → Network tab
2. Visit [virtualgenius.com/workshops](https://virtualgenius.com/workshops) in **incognito mode**
3. Click "View Details & Register" button on either workshop
4. **Check the URL in browser address bar** - Should include:
   ```
   https://ti.to/EDDD/eventstorming-facilitation-virtual-workshop-dec-2025?
   utm_source=website&
   utm_medium=workshop_page&
   utm_campaign=dec_2025_apac&
   _gl=1*abc123...
   ```
5. ✅ **Success**: `_gl=` parameter is present (contains GA client ID)
6. ❌ **Failure**: No `_gl=` parameter → Cross-domain tracking not working

---

### Test 2: Custom Event Tracking

**Purpose**: Verify `workshop_registration_click` events are firing

1. Keep GA4 Real-time report open: Reports → Realtime
2. Visit [virtualgenius.com/workshops](https://virtualgenius.com/workshops) in **incognito mode**
3. Wait 5 seconds for page to fully load
4. Click "View Details & Register" button (either workshop)
5. **Check GA4 Real-time report** within 5 seconds:
   - Should see event: `workshop_registration_click`
   - Click event name to expand parameters
6. ✅ **Success**: Event appears with parameters:
   ```
   workshop_name: "APAC EventStorming Facilitation Virtual Workshop"
   workshop_date: "December 2-5, 2025"
   link_location: "workshops_page"
   value: 1650
   ```
7. ❌ **Failure**: No event appears → Check browser console for JavaScript errors

---

### Test 3: Blog Post Event Tracking

**Purpose**: Verify tracking works from blog post CTA

1. Keep GA4 Real-time report open
2. Visit [virtualgenius.com/blog/adaconf-2025-melbourne-workshop-and-speaking](https://virtualgenius.com/blog/adaconf-2025-melbourne-workshop-and-speaking) in **incognito mode**
3. Scroll to "Register for APAC Workshop" button
4. Click button
5. **Check GA4 Real-time report**:
6. ✅ **Success**: Event appears with:
   ```
   workshop_name: "APAC EventStorming Facilitation Virtual Workshop"
   link_location: "adaconf_blog_post"
   utm_campaign: "adaconf_2025_post"
   ```

---

### Test 4: UTM Parameter Validation

**Purpose**: Verify UTM parameters are captured correctly

**In Browser:**
1. After clicking registration link, check URL contains all UTM parameters:
   - `utm_source=website`
   - `utm_medium=workshop_page` OR `utm_medium=blog`
   - `utm_campaign=dec_2025_apac` OR `utm_campaign=apr_2026` OR `utm_campaign=adaconf_2025_post`

**In GA4 (after 24 hours):**
1. Go to Reports → Acquisition → Traffic acquisition
2. Click "Session source / medium" dropdown
3. Look for entries: `website / workshop_page` and `website / blog`
4. Click campaign name to see breakdown
5. ✅ **Success**: See campaign names like `dec_2025_apac`, `apr_2026`, `adaconf_2025_post`

**In Ti.to Dashboard (after registrations occur):**
1. Log into [ti.to](https://ti.to)
2. Select event: "EventStorming Facilitation Virtual Workshop"
3. Look for "Traffic Sources" or "Referrers" section
4. ✅ **Success**: See entries with UTM parameters from your website

---

### Test 5: Conversion Event Setup (One-Time)

**Purpose**: Mark event as conversion for better reporting

1. In GA4, go to Admin → Events
2. Search for `workshop_registration_click`
3. Toggle "Mark as conversion" to ON
4. ✅ **Success**: Event now appears in Conversions reports

---

### Test 6: Funnel Analysis (After Data Accumulates)

**Purpose**: Create custom funnel report to measure conversion rate

1. In GA4, go to Explore → Create new exploration
2. Select "Funnel exploration" template
3. Configure funnel steps:
   - **Step 1**: Event `page_view` where `page_path` contains `/workshops`
   - **Step 2**: Event `workshop_registration_click`
4. Add breakdown dimension: `Event parameter: link_location`
5. ✅ **Success**: See conversion rate from page view → click

---

## Expected Results

### GA4 Real-time Report (Immediate)
```
Events in last 30 minutes:
├─ page_view (multiple)
├─ workshop_registration_click
│  ├─ workshop_name: "APAC EventStorming Facilitation Virtual Workshop"
│  ├─ workshop_date: "December 2-5, 2025"
│  ├─ link_location: "workshops_page"
│  └─ value: 1650
└─ click (outbound link)
```

### GA4 Events Report (After 24-48 hours)
- Event count for `workshop_registration_click`
- Breakdown by `link_location` parameter
- Conversion value totals

### GA4 Acquisition Report (After 24-48 hours)
```
Traffic acquisition:
Source / Medium          | Users | Conversions
------------------------|-------|-------------
website / workshop_page | XX    | XX
website / blog          | XX    | XX

Campaign:
dec_2025_apac          | XX    | XX
apr_2026               | XX    | XX
adaconf_2025_post      | XX    | XX
```

### Ti.to Referrers (After Registrations)
```
Referrer: virtualgenius.com/workshops
UTM Source: website
UTM Medium: workshop_page
UTM Campaign: dec_2025_apac
Registrations: X
```

---

## Troubleshooting

### Issue: No events appearing in GA4 Real-time

**Possible Causes:**
- Ad blocker or privacy extension blocking GA4
- JavaScript error on page
- GA4 script not loading

**Debugging:**
1. Open browser DevTools → Console tab
2. Look for JavaScript errors (red text)
3. Check Network tab → Filter by "google-analytics" or "gtag"
4. Verify `gtag/js` request completed successfully
5. Disable ad blockers/privacy extensions and retry

---

### Issue: Events firing but missing parameters

**Possible Causes:**
- JavaScript syntax error in onclick handler
- Special characters in workshop names breaking string

**Debugging:**
1. Open DevTools → Console
2. Look for syntax errors
3. Check that all parameter values are properly escaped
4. Verify `window.gtag` is defined before click

---

### Issue: `_gl` parameter not appearing in URLs

**Possible Causes:**
- Linker plugin not configured correctly
- GA4 script not loaded before link click

**Debugging:**
1. Check BaseHead.astro has linker configuration:
   ```javascript
   gtag('config', gaId, {
     'linker': {
       'domains': ['ti.to']
     }
   });
   ```
2. Ensure GA4 script loads before user clicks link
3. Test in incognito to avoid browser caching issues

---

### Issue: UTM parameters missing from Ti.to URLs

**Possible Causes:**
- Incorrect URL format in Astro components
- URL encoding issues

**Debugging:**
1. Inspect link `href` attribute in browser DevTools
2. Verify UTM parameters are in URL before click
3. Check for URL encoding (spaces should be `%20`, etc.)

---

### Issue: No data in GA4 Acquisition reports

**Possible Causes:**
- Not enough time elapsed (24-48 hour delay for some reports)
- No actual registrations completed
- Cross-domain tracking broke session continuity

**Expectations:**
- Real-time: Immediate (5 seconds)
- Event reports: 4-8 hours
- Acquisition reports: 24-48 hours
- Standard reports: 24-48 hours

---

## Validation Checklist

### Initial Setup (One-Time)
- [ ] GitHub Actions deployment completed successfully
- [ ] Website accessible at virtualgenius.com
- [ ] GA4 Real-time report accessible

### Manual Testing (Do This Now)
- [ ] Test 1: `_gl` parameter appears in Ti.to URLs
- [ ] Test 2: `workshop_registration_click` fires from workshops page (Dec)
- [ ] Test 2: `workshop_registration_click` fires from workshops page (Apr)
- [ ] Test 3: `workshop_registration_click` fires from blog post
- [ ] Test 4: UTM parameters visible in URLs
- [ ] Test 5: Event marked as conversion in GA4 Admin

### Data Verification (After 24-48 Hours)
- [ ] Events appear in Reports → Engagement → Events
- [ ] Event parameters populated correctly
- [ ] UTM campaigns appear in Acquisition reports
- [ ] Funnel report shows conversion rate

### Ti.to Configuration (Optional but Recommended)
- [ ] Added GA4 tracking ID to Ti.to event settings
- [ ] Checked Ti.to referrer data after first registration

---

## Key Metrics to Monitor

**Daily (First Week):**
- Event count: `workshop_registration_click`
- Breakdown by `link_location` (which page drives more clicks?)
- Breakdown by `workshop_name` (Dec vs Apr interest?)

**Weekly:**
- Conversion rate: Page views → Registration clicks
- Campaign performance: Which UTM campaigns drive most clicks?
- Traffic sources: Where are visitors coming from?

**Monthly:**
- Trends: Are clicks increasing or decreasing?
- Blog post effectiveness: Does adaconf post drive sustained traffic?
- Workshop comparison: Is one workshop significantly more popular?

---

## Success Criteria

✅ **Tracking is working if:**
1. Events appear in Real-time within 5 seconds of clicking
2. Event parameters are populated correctly
3. UTM campaigns visible in Acquisition reports
4. Funnel report shows data flowing through steps
5. Ti.to shows referrer data from your website

❌ **Needs fixing if:**
1. No events appear in Real-time after 30 seconds
2. Events missing parameters (null/undefined values)
3. No acquisition data after 48 hours
4. JavaScript errors in browser console
5. `_gl` parameter never appears in URLs

---

## Next Steps After Validation

1. **Mark as Conversion**: Enable `workshop_registration_click` as conversion event
2. **Create Dashboard**: Build custom GA4 dashboard for workshop metrics
3. **Set Up Alerts**: Configure notifications when conversion rate drops
4. **A/B Testing**: Test different CTA copy/placement to optimize clicks
5. **Consider Method 1**: If you need registration completion tracking, switch to Ti.to widget

---

## Questions?

If tracking isn't working after following this guide:
1. Check browser console for JavaScript errors
2. Verify GA4 property ID is correct: G-ST954G5FLN
3. Test in multiple browsers (Chrome, Firefox, Safari)
4. Wait 48 hours for data to populate in standard reports
5. Contact Ti.to support if referrer data not appearing

Last Updated: 2025-11-21
